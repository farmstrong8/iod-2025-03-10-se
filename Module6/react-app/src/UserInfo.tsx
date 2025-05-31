import React from "react";

type UserInfoProps = {
    author: {
        name: string;
        avatarUrl: string;
    };
};

export const UserInfo: React.FC<UserInfoProps> = ({ author }) => {
    return (
        <div className="UserInfo">
            <img className="Avatar" src={author.avatarUrl} alt={author.name} />
            <div className="UserInfo-name">{author.name}</div>
        </div>
    );
};
