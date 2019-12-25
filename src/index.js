import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'


const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          timeAgo="Today at 4:45 pm" 
          blogPost="Nullam id dolor id nibh ultricies vehicula ut id elit."
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Alex" 
          timeAgo="Today at 2:00 am" 
          blogPost="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Jane" 
          timeAgo="Yesterday at 5:00 pm" 
          blogPost="Praesent commodo cursus magna, vel scelerisque nisl consectetur et." 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))