import  addCommentForm, { addCommentFormProps }  from './addCommentForm';
import { FC, lazy } from "react";
export const addCommentFormAsync = lazy<FC<addCommentFormProps>>(() => import("./addCommentForm"));
