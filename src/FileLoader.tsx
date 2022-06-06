import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

function csvToArray(str: string, delimiter = ",") {
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");

  const arr = rows.filter(row => row !== "").map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce((object, header, index) => {
      object[header] = values[index];
      return object;
    }, {});
    return el;
  });

  return arr;
}

export interface Comment {
  name: string,
  comment: string,
}

export interface FileLoaderProps {
  onSuccess: (data: any) => void;
}

export function FileLoader(props: FileLoaderProps) {
  return (
    <Upload.Dragger className='ant-upload ant-upload-drag'
      beforeUpload={file => {
        const reader = new FileReader();
        reader.readAsText(file);

        reader.onload = (e) => {
          const text = e.target?.result;
          if (typeof(text) == "string") {
            const data = csvToArray(text);
            props.onSuccess(data);
          }
        };
      }}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
    </Upload.Dragger>
  );
} 
