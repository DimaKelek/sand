import React from 'react';
import S from "./Stand.module.css"

type StandPropsType = {
    title: string
    children?: React.ReactNode
}

export function Stand(props: StandPropsType) {
    return (
        <div className={S.stand}>
            <div className={S.title}>{props.title}</div>
            {props.children}
        </div>
    );
}