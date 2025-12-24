import React, { useState, useCallback } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar.jsx";

import { MdOutlineArrowUpward } from "react-icons/md";
import { BiSolidShow } from "react-icons/bi";
import { RiComputerLine } from "react-icons/ri";

import {
  ImNewTab,
  ImMobile2,
} from "react-icons/im";

import {
  IoMdDownload,
  IoMdClose,
} from "react-icons/io";

import {
  FaEyeSlash,
  FaTabletAlt,
} from "react-icons/fa";

import Editor from "@monaco-editor/react";
import { GoogleGenAI } from "@google/genai";
import { API_KEY } from "./helper";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";

const DEFAULT_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>WebArchitect</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-6 bg-gray-900 text-white">
  <h1 class="text-3xl font-bold">Welcome to WebArchitect</h1>
  <p class="mt-2 text-gray-400">Your AI-powered website builder</p>
</body>
</html>`;

const ai = new GoogleGenAI({ apiKey: API_KEY });

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(DEFAULT_CODE);

  // ✅ Safe code extraction
  const extractCode = (text = "") => {
    const match = text.match(/```(?:html)?\n([\s\S]*?)```/);
    return match ? match[1].trim() : text.trim();
  };

  // ✅ Download HTML safely
  const downloadCode = () => {
    const blob = new Blob([code], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "webarchitect.html";
    a.click();

    URL.revokeObjectURL(url);
  };

  // ✅ Generate website
  const getResponse = useCallback(async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    try {
      setLoading(true);

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Generate a single-file responsive HTML website using Tailwind CSS CDN and GSAP CDN only.

Rules:
- Output ONLY one fenced HTML code block
- No explanations

Website request:
${prompt}`,
      });

      const html = extractCode(response?.text);
      setCode(html || DEFAULT_CODE);
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate website");
    } finally {
      setLoading(false);
    }
  }, [prompt]);

  return (
    <>
      <Navbar />

      <div className="container">
        <h3 className="text-[40px] font-bold">
          Design amazing websites with{" "}
          <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-purple-500 bg-clip-text text-transparent">
            WebArchitect
          </span>
        </h3>

        <p className="mt-2 text-gray-400">
          Describe your website and AI will code it for you.
        </p>

        {/* Prompt */}
        <div className="inputBox">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Give a full overview of your website idea"
          />

          {prompt && (
            <button
              type="button"
              onClick={getResponse}
              className="sendIcon"
              aria-label="Generate website"
            >
              <MdOutlineArrowUpward />
            </button>
          )}
        </div>

        <p className="text-[20px] font-bold mt-20">
          Preview your AI-generated website
        </p>

        {/* Preview */}
        <div className="preview">
          <div className="header">
            <h3 className="font-bold">Live Demo</h3>

            <div className="icons">
              <button type="button" onClick={() => setOpenPreview(true)}>
                Open <ImNewTab />
              </button>

              <button type="button" onClick={downloadCode}>
                Download <IoMdDownload />
              </button>

              <button type="button" onClick={() => setShowCode(!showCode)}>
                {showCode ? "Hide Code" : "Show Code"}{" "}
                {showCode ? <FaEyeSlash /> : <BiSolidShow />}
              </button>
            </div>
          </div>

          {loading ? (
            <div className="loader">
              <HashLoader color="#9333ea" />
              <p className="mt-4">Generating your website…</p>
            </div>
          ) : showCode ? (
            <Editor
              height="100%"
              theme="vs-dark"
              defaultLanguage="html"
              value={code}
              onChange={(val) => setCode(val || "")}
            />
          ) : (
            <iframe
              title="Live website preview"
              srcDoc={code}
              className="w-full bg-white"
              sandbox="allow-scripts allow-same-origin"
              loading="lazy"
            />
          )}
        </div>
      </div>

      {/* Modal Preview */}
      {openPreview && (
        <div className="modelCon">
          <div className="modelBox">
            <div className="header">
              <h3 className="font-bold">Preview</h3>

              <div className="icons">
                <RiComputerLine />
                <FaTabletAlt />
                <ImMobile2 />
              </div>

              <button
                type="button"
                onClick={() => setOpenPreview(false)}
                aria-label="Close preview"
              >
                <IoMdClose />
              </button>
            </div>

            <iframe
              title="Fullscreen website preview"
              srcDoc={code}
              className="newTabIframe"
              sandbox="allow-scripts allow-same-origin"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
