import React from 'react'

export const Button = (props) => {
    return (
        <>
              <a href={props.Url} className={props.Classes}>{props.text}</a>
        </>
    );
}
