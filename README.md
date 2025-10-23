# CheapFlights — Static duplicate (copy/paste ready)

This is a static recreation of a flight search UI branded as "CheapFlights".  
It includes:
- Home search UI (index.html)
- Search results (flights.html) — mock data
- Booking page (booking.html) with Paystack inline and QR placeholders
- About, Contact

## Deploy
1. Create GitHub repo `CheapFlights`.
2. Add these files and assets.
3. Push and enable GitHub Pages (main branch / root).
4. Update `js/paystack.js` with your Paystack keys and implement server-side verify.

## Notes
- Current flight data is mocked in `js/search.js`. Replace calls with your scraper or API.
- Paystack integration uses inline flow and requires server verification.
