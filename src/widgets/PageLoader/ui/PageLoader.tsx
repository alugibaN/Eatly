import React from "react";
import { classNames } from "shared/utils/classNames/ClassNames";
import "./PageLoader.scss";


interface PageLoaderProps {
  className?: string;
}
export const PageLoader = ({ className }: PageLoaderProps) => {
      
    return (
        <div
            className={classNames("page__loader", {}, [className])}
        >
            <div className="lds-facebook">
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    );
};
