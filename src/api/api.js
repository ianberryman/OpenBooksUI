import axios from 'axios';
import { config } from "../config/config";
import actions from '../reducers/boundActionCreators';

export const serverPath = config.getServerPath();
