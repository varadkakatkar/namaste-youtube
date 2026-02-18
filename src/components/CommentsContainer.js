import React from 'react'

const commentsData = [
    {
        name: 'Amit',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        replies: [
            {
                name: 'Amit',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                replies: [
                    {
                        name: 'Amit',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                        replies: [
                            {
                                name: 'Amit',
                                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                                replies: [
                                  
                                ],
                            },
                        ],
                    },
                    {
                        name: 'Amit',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                        replies: [
                            {
                                name: 'Amit',
                                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                            },
                        ],
                    },
                    {
                        name: 'Amit',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    },
                ],
            },
            {
                name: 'Amit',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
        ],
    },
    {
        name: 'John',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
]

const Comment = ({data}) => {
    return (
        <div className="m-2 shadow-lg p-2 rounded-lg bg-gray-100 ml-2">
            <div className="flex items-center">
                <img className="w-10 h-10 rounded-full" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="profile" />
                <div className="flex flex-col ml-2">
                    <span className="font-bold">{data.name}</span>
                    <span className="text-sm">{data.text}</span>
                </div>
            </div>
            {data.replies && (
                <CommentsList comments={data.replies} />
            )}
        </div>
    )
}

const CommentsList = ({comments}) => {
    return (
        <div className="flex flex-col">
            {comments.map((comment) => (
                <Comment key={comment.name} data={comment} />
            ))}
        </div>
    )
}

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments</h1>
        <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer