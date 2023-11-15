import { message } from 'antd';
import { IContent } from '../models/common/common';

const SuccessMessage = ({ content }:IContent) => {
  message.success(content);
  return null; 
};

export default SuccessMessage;