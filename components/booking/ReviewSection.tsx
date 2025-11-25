import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
    id: string;
    comment: string;
    rating?: number; // Optional, if your API returns ratings
    author?: string; // Optional, if you have author info
}

interface ReviewSectionProps {
    propertyId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!propertyId) return;

        const fetchReviews = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/properties/${propertyId}/reviews`);
                setReviews(response.data);
            } catch (err) {
                console.error("Error fetching reviews:", err);
                setError("Failed to load reviews.");
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [propertyId]);

    if (loading) return <p>Loading reviews...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (reviews.length === 0) return <p>No reviews yet.</p>;

    return (
        <div className="space-y-4">
            {reviews.map((review) => (
                <div key={review.id} className="p-4 border rounded shadow-sm">
                    {review.rating !== undefined && (
                        <p className="text-yellow-500 font-semibold">Rating: {review.rating}</p>
                    )}
                    {review.author && <p className="font-bold">{review.author}</p>}
                    <p>{review.comment}</p>
                </div>
            ))}
        </div>
    );
};

export default ReviewSection;
