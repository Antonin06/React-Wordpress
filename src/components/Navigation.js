import React from "react";

export default function Navigation({fetchMore, first, after, last ,before, text}) {
    const updateQuery = (previousResult, { fetchMoreResult }) => {
        return fetchMoreResult.posts.edges.length ? fetchMoreResult : previousResult;
    };
    return (
        <div className="pagination__link"
        	onClick={() => {
        		fetchMore({
        			variables: {
        				first: first,
        				after: after,
        				last: last,
        				before: before
        			},
        			updateQuery
        		});
        	}}
        >
            {text}
        </div>
    );

};