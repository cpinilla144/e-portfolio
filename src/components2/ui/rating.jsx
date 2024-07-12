import react from 'react';

const rating = ({rating}) => {
    return (
        <div className="book_ratings">
   
        {new Array (math.floor(rating)).fill(0).map((_, index) => <FontawesomeIcon icon="star" key={index} />
       )}
        { !Number.isInteger(rating) && (<FontawesomeIcon icon="star-half-alt" />
       )}
      </div>
        
    );
};
export default rating;