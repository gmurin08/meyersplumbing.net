'use client'
import { useEffect } from 'react';

const ReviewsWidget = ({ 
  widgetId = '3NiRcRoiYquYMYbm5yjM',
  minHeight = '690px',
  className = ''
}) => {
  useEffect(() => {
    // Load the script only once when component mounts
    if (!document.querySelector('script[src="https://reputationhub.site/reputation/assets/review-widget.js"]')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className={`reviews-widget-container ${className}`}>
      <iframe 
        className='lc_reviews_widget' 
        src={`https://reputationhub.site/reputation/widgets/review_widget/${widgetId}`}
        style={{
          minWidth: '100%', 
          width: '100%', 
          minHeight: minHeight, 
          height: 'auto', 
          border: 'none'
        }}
        title="Customer Reviews"
        loading="lazy"
      />
    </div>
  );
};

export default ReviewsWidget;