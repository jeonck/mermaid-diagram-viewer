# Mermaid Diagram Viewer

A modern, responsive web application that allows users to create and preview Mermaid diagrams in real-time. Features include syntax highlighting, dark/light mode, example templates, and keyboard shortcuts.

## Features

- 🎨 **Modern UI**: Clean, intuitive interface with glassmorphism design elements
- 📱 **Responsive**: Works beautifully on mobile, tablet, and desktop devices
- 🌗 **Dark/Light Mode**: Manual theme toggle with system preference detection
- ⚡ **Real-time Preview**: See diagrams update as you type (with auto-render option)
- 🧩 **Multiple Diagram Types**: Support for Flowcharts, Sequence Diagrams, Gantt Charts, and Class Diagrams
- ⌨️ **Keyboard Shortcuts**: 
  - `Ctrl/Cmd + Enter`: Render diagram
  - `Ctrl/Cmd + Delete`: Clear diagram
- 🔧 **Example Templates**: Quick-start templates for common diagram types
- 📊 **Character Count**: Real-time character count display
- 🔄 **Auto-render Toggle**: Option to enable/disable automatic diagram updates
- 🎯 **Visual Feedback**: Animations, loading states, and error indicators

## Technologies Used

- HTML5
- CSS3 (with Tailwind CSS)
- JavaScript (Vanilla)
- [Mermaid.js](https://mermaid.js.org/) - For diagram rendering
- [Tailwind CSS](https://tailwindcss.com/) - For styling and responsive design

## Usage

1. Open `index.html` in any modern web browser
2. Type your Mermaid code in the editor panel
3. Toggle "Auto Render" to control when diagrams update, or click "Render" to manually update
4. Use example templates for quick start
5. Toggle between light/dark mode using the theme switcher

## Diagram Types

The application supports all major Mermaid diagram types:

- **Flowcharts**: Visual representation of processes and workflows
- **Sequence Diagrams**: Show interactions between different entities over time
- **Gantt Charts**: Project timeline visualization
- **Class Diagrams**: Object-oriented class relationships

## File Structure

```
mermaid-chart/
├── index.html          # Main application file
├── css/
│   └── styles.css      # Custom CSS styles
├── js/
│   └── script.js       # JavaScript functionality
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).