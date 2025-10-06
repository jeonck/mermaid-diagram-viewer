# Mermaid Diagram Viewer

## Project Overview

Mermaid Diagram Viewer is a modern web application that allows users to input Mermaid diagram code and see real-time previews of various types of diagrams. The application provides a sleek, user-friendly interface with syntax highlighting, dark mode support, and example templates for different diagram types.

### Key Features
- Real-time diagram rendering as you type
- Support for multiple Mermaid diagram types (Flowchart, Sequence, Gantt, Class)
- Modern dark/light theme with manual toggle and system preference detection
- Example templates for quick start
- Manual rendering option with a "Render" button
- Clear functionality to reset the diagram
- Responsive design optimized for mobile and desktop
- Keyboard shortcuts for power users
- Character count display
- Visual feedback animations

### Technologies Used
- HTML/CSS/JavaScript (Vanilla)
- [Mermaid.js](https://mermaid.js.org/) - For diagram rendering
- [Tailwind CSS](https://tailwindcss.com/) - For styling and responsive design
- CDN-hosted resources (no local build system required)

## Usage

### Opening the Application
Simply open the `index.html` file in any modern web browser to use the application.

### Creating Diagrams
1. Type your Mermaid code in the left panel
2. The diagram will update in real-time (if auto-render is enabled) or when you click "Render"
3. Use the example buttons to quickly load sample diagrams of different types
4. Toggle "Auto Render" to control when diagrams are updated
5. Use the theme toggle to switch between light and dark mode

### Keyboard Shortcuts
- `Ctrl/Cmd + Enter`: Render diagram
- `Ctrl/Cmd + Delete`: Clear diagram

### Diagram Types Supported
- Flowcharts
- Sequence Diagrams
- Gantt Charts
- Class Diagrams

## Building and Running

This application is a static HTML file with no build process required. Simply:

1. Clone or download the repository
2. Open `index.html` in a web browser

For development, you can make changes to the HTML, CSS, and JavaScript files directly and refresh the browser to see changes.

## File Structure

```
mermaid-chart/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Custom CSS styles
├── js/
│   └── script.js       # JavaScript functionality
└── tailwind.config.js  # Tailwind CSS configuration
```

## Development Conventions

### Styling
- Uses Tailwind CSS utility classes for styling
- Custom styles are defined in `css/styles.css`
- Modern color palette with light and dark mode variants
- Responsive design using Tailwind's grid and flex utilities
- Modern UI elements with shadows, rounded corners, and smooth transitions

### JavaScript
- Vanilla JavaScript with no external frameworks
- Event-driven approach for user interactions
- Debounced input handling for performance
- Error handling for diagram rendering with animations
- All JavaScript logic is in `js/script.js`
- Local storage for theme persistence
- Keyboard shortcuts for enhanced UX

### Internationalization
- The application is currently in Korean (한국어)
- Text content is embedded in the HTML and JavaScript

## Modern Design Elements

### Visual Enhancements
- Glassmorphism-inspired cards with subtle shadows
- Modern color palette with carefully selected accent colors
- Smooth transitions and animations
- Custom scrollbar styling
- Loading indicators during diagram rendering
- Error state animations

### Responsive Layout
- Mobile-first design approach
- Stacked layout on small screens
- Side-by-side layout on larger screens
- Touch-friendly controls with appropriate sizing
- Adaptive diagram container height

### Dark/Light Theme
- Manual theme toggle with persistent storage
- System preference detection
- Carefully designed color schemes for both themes
- Theme-appropriate Mermaid diagrams

## Examples

The application includes example templates for different diagram types:
- Flowchart: Basic decision flow with different outcomes
- Sequence: User-server-database interaction
- Gantt: Project timeline example
- Class: Inheritance relationship between animal classes

## Limitations

- CDN-hosted dependencies required internet connection
- No save/export functionality built-in
- Currently only Korean language support

## Future Enhancements

Potential improvements could include:
- Export functionality (PNG, SVG, PDF)
- Additional diagram type examples
- Multi-language support
- Local storage for saving diagrams
- Custom theme configuration
- Collaboration features
- Diagram history/undo-redo