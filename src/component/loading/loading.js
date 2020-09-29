import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./loading.scss";

function Loading() {
    return <FontAwesomeIcon className="spiner" icon={faSpinner} />
}
export default Loading;

