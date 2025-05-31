import React from "react";
import { UserInfo } from "./UserInfo";

type ComplexCommentProps = {
    date: Date;
    text: string;
    author: {
        name: string;
        avatarUrl: string;
    };
};

export const ComplexComment: React.FC<ComplexCommentProps> = ({
    date,
    text,
    author,
}) => {
    return (
        <div className="Comment componentBox">
            <UserInfo author={author} />
            <div className="Comment-text">{text}</div>
            <div className="Comment-date">{date.toLocaleString()}</div>
        </div>
    );
};
