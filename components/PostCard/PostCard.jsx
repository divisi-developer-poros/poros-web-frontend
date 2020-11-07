import React, {useState, useRef, useEffect} from 'react'
import Link from 'next/link'
import moment from 'moment'

const PostCard = (props) => {

    return (
        <div className="w-full bg-gray-200 flex flex-col items-center px-4 py-3 rounded-lg shadow-lg border-2 border-gray-600 mb-5">
            <div className="flex justify-start items-center w-full mb-5">
                <div className="w-10 h-10 rounded-full mr-2 border-2 border-black overflow-hidden bg-white flex justify-center items-center">
                    <img src={props.postData.userImg} alt={props.postData.username} className="w-full" />
                </div>
                <div>
                    <p className="text-sm">{props.postData.username}</p>
                    <p className="text-xs">{moment(props.postData.created).fromNow()}</p>
                </div>
            </div>
            <div className="md:w-full md:pl-12">
                <Link href={`/posts/${props.postData.id}`}>
                    <div className="cursor-pointer lg:w-85/100 md:w-90/100">
                        <p className="text-xl font-bold md:text-2xl">{props.postData.title}</p>
                    </div>
                </Link>
                <div className="flex text-xs flex-wrap mt-4 mb-5">
                    {
                        props.postData.tag.map((t, idx) => {
                            return (
                                <p key={idx} className="mr-2 px-3 mb-2 bg-gray-400 rounded-2xl">#{t}</p>
                            )
                        })
                    }
                </div>
                <div className="w-full flex justify-end">
                    <Link href={`/edit-post/${props.postData.id}`}>
                        <button className="px-4 py-1 bg-green-500 rounded-lg font-semibold text-white mr-3">Edit</button>
                    </Link>
                    <button className="px-4 py-1 bg-red-500 rounded-lg font-semibold text-white" onClick={props.ondelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default PostCard