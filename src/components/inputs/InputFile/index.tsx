import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImport } from "@fortawesome/free-solid-svg-icons";
import { InputFileProps } from "./interfaces/InputFile.interface";
import { components, styles } from "../../forms/FormImportFile/styles";

const InputFile: React.FC<InputFileProps> = ({ onFileChange }) => {
  const accept = ".json, .yaml";
  const { InputLabelFile, InputFile, FormHelperText } = components;
  const { DivInputFile, DivHelperText, FileImportIcon } = styles;

  return (
    <div style={DivInputFile}>
      <InputLabelFile htmlFor="file-input">
        Arraste e solte um arquivo ou clique para selecionar
        <FontAwesomeIcon
          icon={faFileImport}
          style={FileImportIcon}
        />
      </InputLabelFile>

      <InputFile
        type="file"
        id="file-input"
        onChange={onFileChange}
        inputProps={{ accept }}
      />

      <div style={DivHelperText}>
        <FormHelperText>
          Importe um arquivo no formato <strong>JSON</strong> ou <strong>YAML</strong>
        </FormHelperText>
      </div>
    </div>
  );
};

export default InputFile;
