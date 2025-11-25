import BookingForm from "@/components/booking/BookingForm";
import CancellationPolicy from "@/components/booking/CancellationPolicy";
import OrderSummary from "@/components/booking/OrderSummary";
import { BookingDetails } from "@/interfaces";

export default function BookingPage() {
    const bookingDetails: BookingDetails = {
        propertyName: "Villa Arren Beach House",
        price: 7500,
        bookingFee: 65,
        totalNights: 3,
        startDate: "24 August 2024",
    };

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* LEFT SIDE: Form + Policy */}
                <div className="md:col-span-2 space-y-6">
                    <BookingForm />
                    <CancellationPolicy />
                </div>

                {/* RIGHT SIDE: Order Summary */}
                <div>
                    <OrderSummary bookingDetails={bookingDetails} />
                </div>

            </div>
        </div>
    );
}
