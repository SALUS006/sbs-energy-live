# SBS Energy - Bharat Petrol Pump Website

A premium, modern website for SBS Energy Bharat Petrol Pump located in Dingore, Maharashtra.

## 🌟 Features

### Design Excellence
- **Modern UI/UX**: Premium design with vibrant gradients, smooth animations, and glassmorphism effects
- **Responsive Layout**: Fully responsive design that works seamlessly on desktop, tablet, and mobile devices
- **Dark Hero Section**: Eye-catching hero with animated elements and dynamic backgrounds
- **Micro-animations**: Smooth transitions and hover effects throughout the site
- **Professional Typography**: Using Inter and Outfit fonts for a modern, clean look

### Sections

1. **Hero Section**
   - Prominent rating display (4.2 stars, 11 reviews)
   - Call-to-action buttons for directions and services
   - Key stats: 24/7 availability, all cards accepted, highway location
   - Animated hero image with glow effects

2. **Services Section**
   - Premium Fuel (Diesel, Petrol, Propane Exchange)
   - Professional Car Wash
   - Free Air Pump Service
   - Clean Restrooms
   - Interactive service cards with hover animations

3. **About Section**
   - Company information and mission
   - Key features: 24/7 availability, quality assurance, professional staff
   - Payment methods display
   - Statistics cards with animated counters

4. **Location Section**
   - Embedded Google Maps integration
   - Complete address and contact information
   - Operating hours (24/7)
   - Direct link to Google Maps

5. **Contact Section**
   - Functional contact form with validation
   - Form fields: Name, Email, Phone, Message
   - Real-time form validation
   - Success notifications

6. **Footer**
   - Quick links navigation
   - Services overview
   - Contact information
   - Payment methods display

### Technical Features

- **Smooth Scrolling**: Animated scroll navigation between sections
- **Intersection Observer**: Lazy loading and scroll-triggered animations
- **Form Validation**: Real-time validation with error messages
- **Notification System**: Toast notifications for form submissions
- **Back to Top Button**: Smooth scroll to top functionality
- **Parallax Effects**: Subtle parallax scrolling on hero section
- **Counter Animations**: Animated statistics counters
- **Accessibility**: Keyboard navigation support and ARIA labels
- **Performance Optimized**: Debounced scroll events and lazy loading

## 📁 Project Structure

```
sbs-energy/
├── index.html              # Main HTML file
├── styles.css              # Complete CSS with design system
├── script.js               # JavaScript functionality
├── README.md               # This file
└── images/
    ├── petrol_pump_hero_*.png
    ├── fuel_icon_*.png
    ├── carwash_icon_*.png
    ├── airpump_icon_*.png
    └── restroom_icon_*.png
```

## 🚀 Getting Started

### Running Locally

1. **Using Python (Recommended)**
   ```bash
   cd /Users/sandeepsalunkhe30/root/sbs-energy
   python3 -m http.server 8000
   ```
   Then open http://localhost:8000 in your browser

2. **Using Node.js**
   ```bash
   npx -y serve .
   ```

3. **Using PHP**
   ```bash
   php -S localhost:8000
   ```

### Deployment Options

#### 1. GitHub Pages
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main

# Enable GitHub Pages in repository settings
```

#### 2. Netlify
- Drag and drop the project folder to Netlify
- Or connect your GitHub repository

#### 3. Vercel
```bash
npx vercel
```

#### 4. Traditional Web Hosting
- Upload all files via FTP to your web host
- Ensure index.html is in the root directory

## 🎨 Color Scheme

- **Primary Blue**: #0066cc (Bharat Petroleum brand color)
- **Primary Orange**: #ff6b35 (Accent color)
- **Dark Blue**: #003d82 (Deep brand color)
- **Light Blue**: #4da6ff (Highlights)
- **Gradients**: Custom gradients throughout for premium feel

## 🔧 Customization

### Updating Content

1. **Company Information**: Edit the text in `index.html`
2. **Colors**: Modify CSS variables in `styles.css` (lines 10-42)
3. **Images**: Replace image files with same names or update paths in HTML
4. **Contact Form**: Update form handling in `script.js` (lines 182-203)

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Update navigation links in the navbar
4. Add scroll animations in `script.js`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔍 SEO Features

- Semantic HTML5 structure
- Meta descriptions and keywords
- Proper heading hierarchy
- Alt text for images
- Fast loading times
- Mobile-responsive design

## 📊 Performance

- Optimized images
- Minimal external dependencies
- Efficient CSS and JavaScript
- Lazy loading for images
- Debounced scroll events

## 🌐 Location Information

**SBS Energy - Bharat Petrol Pump**
- Address: 7WR4+253, National Highway, Near Ahilyanagar - Kalyan Road, Dingore, Maharashtra 410510, India
- Operating Hours: 24/7
- Rating: 4.2 ⭐ (11 reviews)
- Google Maps: [View Location](https://maps.app.goo.gl/C8xPgXMH8FiX24Eb6)

## 📞 Contact

- Email: info@sbsenergy.com
- Location: Dingore, Maharashtra 410510
- Available: 24/7

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties, flexbox, and grid
- **JavaScript (ES6+)**: Interactive functionality
- **Google Fonts**: Inter and Outfit typefaces
- **Google Maps**: Embedded location map

## 📄 License

This website is created for SBS Energy - Bharat Petrol Pump. All rights reserved.

## 🎯 Future Enhancements

- [ ] Add fuel price display with live updates
- [ ] Integrate real contact form backend
- [ ] Add customer testimonials section
- [ ] Implement multi-language support
- [ ] Add blog/news section
- [ ] Create admin panel for content management
- [ ] Add online booking for car wash services
- [ ] Integrate payment gateway for services

## 🙏 Credits

Website developed with modern web technologies and best practices.
Design inspired by premium fuel station brands and contemporary web design trends.

---

**Built with ❤️ for SBS Energy**
