import React from "react"
import { createRoot } from "react-dom/client";
import AppService from "./modules/app.service"
import { config } from "./modules/config"
import App from "./App"
import "./modules/ts.module"
import "./css/index.css"
import "./less/index.less"
import "./scss/index.scss"

console.log(config)

const app = new AppService("Hello, World!")
app.log()

const container = document.getElementById("app")
const root = createRoot(container)
root.render(<App />)
