import React from "react";
import {BlogModel} from "../models/BlogModel.ts";


export const BlogCard: React.FC<{blog: BlogModel}> = (props) => {
    return (
        <div className="m-5 card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{props.blog.title}</h2>
                <p>{props.blog.subtitle}</p>
                <div className="card-actions justify-end">
                    <button className="btn">Read More</button>
                </div>
            </div>
        </div>
    )
}