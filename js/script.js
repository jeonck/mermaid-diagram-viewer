// Theme management
function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
    
    // Update Mermaid theme
    updateMermaidTheme();
}

// Initialize theme based on user preference or saved setting
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (systemPrefersDark) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Update icon
    updateThemeIcon();
}

// Update theme icon
function updateThemeIcon() {
    const themeIcon = document.getElementById('themeIcon');
    const isDark = document.documentElement.classList.contains('dark');
    
    if (isDark) {
        // Moon icon for dark mode
        themeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>';
    } else {
        // Sun icon for light mode
        themeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>';
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    updateThemeIcon();
});

// Initialize Mermaid
let mermaidConfig = {
    startOnLoad: false,
    theme: 'default',
    themeVariables: {
        primaryColor: '#5D5CDE',
        primaryTextColor: '#000',
        primaryBorderColor: '#5D5CDE',
        lineColor: '#5D5CDE'
    }
};

mermaid.initialize(mermaidConfig);

// Elements
const mermaidInput = document.getElementById('mermaidInput');
const mermaidOutput = document.getElementById('mermaidOutput');
const renderBtn = document.getElementById('renderBtn');
const clearBtn = document.getElementById('clearBtn');
const autoRender = document.getElementById('autoRender');
const errorMessage = document.getElementById('errorMessage');
const exampleBtns = document.querySelectorAll('.example-btn');
const themeToggle = document.getElementById('themeToggle');

// Add event listener for theme toggle
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Default example
const defaultExample = `graph TD
    A[시작] --> B{조건 확인}
    B -->|예| C[작업 수행]
    B -->|아니오| D[다른 작업]
    C --> E[완료]
    D --> E
    E --> F[종료]
    
    style A fill:#e1f5fe
    style F fill:#e8f5e8
    style B fill:#fff3e0`;

// Example templates
const examples = {
    'Flowchart': defaultExample,
    'Sequence': `sequenceDiagram
    participant A as 사용자
    participant B as 서버
    participant C as 데이터베이스
    
    A->>B: 로그인 요청
    B->>C: 사용자 정보 조회
    C-->>B: 사용자 데이터
    B-->>A: 로그인 성공`,
    'Gantt': `gantt
    title 프로젝트 일정
    dateFormat  YYYY-MM-DD
    section 설계
    요구사항 분석    :done, des1, 2024-01-01, 2024-01-05
    시스템 설계      :done, des2, after des1, 5d
    section 개발
    프론트엔드      :active, dev1, 2024-01-10, 10d
    백엔드          :dev2, after dev1, 8d
    section 테스트
    단위 테스트     :test1, after dev2, 3d
    통합 테스트     :test2, after test1, 4d`,
    'Class': `classDiagram
    class 동물 {
        +이름: String
        +나이: int
        +먹기()
        +잠자기()
    }
    
    class 개 {
        +품종: String
        +짖기()
        +꼬리흔들기()
    }
    
    class 고양이 {
        +털색: String
        +야옹거리기()
        +그루밍()
    }
    
    동물 <|-- 개
    동물 <|-- 고양이`
};

// Set default example
mermaidInput.value = defaultExample;

// Render diagram
async function renderDiagram() {
    const code = mermaidInput.value.trim();
    
    if (!code) {
        mermaidOutput.innerHTML = '<div class="text-modern-text-secondary dark:text-dark-text-secondary text-center py-12">다이어그램 코드를 입력하세요</div>';
        hideError();
        return;
    }

    try {
        // Clear previous diagram
        mermaidOutput.innerHTML = '<div class="flex items-center justify-center h-full"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div></div>';
        
        // Validate and render
        const { svg, bindFunctions } = await mermaid.render('mermaid-diagram-' + Date.now(), code);
        mermaidOutput.innerHTML = svg;
        if (bindFunctions) bindFunctions(mermaidOutput);
        
        hideError();
    } catch (error) {
        console.error('Mermaid rendering error:', error);
        showError('다이어그램 렌더링 중 오류가 발생했습니다: ' + error.message);
        mermaidOutput.innerHTML = '<div class="text-red-500 text-center p-8">렌더링 오류</div>';
        
        // Add shake animation to error message
        errorMessage.classList.add('shake');
        setTimeout(() => {
            errorMessage.classList.remove('shake');
        }, 500);
    }
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
}

function hideError() {
    errorMessage.classList.add('hidden');
}

// Event listeners
renderBtn.addEventListener('click', () => {
    // Add a small visual feedback for the button click
    renderBtn.classList.add('opacity-75');
    setTimeout(() => {
        renderBtn.classList.remove('opacity-75');
    }, 150);
    
    renderDiagram();
});

clearBtn.addEventListener('click', () => {
    // Add visual feedback for clear button
    clearBtn.classList.add('opacity-75');
    setTimeout(() => {
        clearBtn.classList.remove('opacity-75');
    }, 150);
    
    mermaidInput.value = '';
    mermaidOutput.innerHTML = '<div class="text-modern-text-secondary dark:text-dark-text-secondary text-center py-12">다이어그램이 여기에 표시됩니다...</div>';
    hideError();
});

// Auto render
let debounceTimer;
mermaidInput.addEventListener('input', () => {
    // Update character count
    const charCount = mermaidInput.value.length;
    let statusText = document.querySelector('.char-count');
    if (!statusText) {
        statusText = document.createElement('div');
        statusText.className = 'char-count text-xs text-modern-text-secondary dark:text-dark-text-secondary mt-1';
        statusText.style.textAlign = 'right';
        mermaidInput.parentNode.appendChild(statusText);
    }
    statusText.textContent = `${charCount} characters`;
    
    if (autoRender.checked) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(renderDiagram, 500);
    }
});

// Example buttons
exampleBtns.forEach((btn, index) => {
    const exampleNames = ['Flowchart', 'Sequence', 'Gantt', 'Class'];
    btn.addEventListener('click', () => {
        // Add visual feedback for button click
        btn.classList.add('scale-95');
        setTimeout(() => {
            btn.classList.remove('scale-95');
        }, 100);
        
        const exampleName = exampleNames[index];
        mermaidInput.value = examples[exampleName];
        if (autoRender.checked) {
            renderDiagram();
        }
    });
});

// Initial render
renderDiagram();

// Update theme based on dark mode
function updateMermaidTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    mermaidConfig.theme = isDark ? 'dark' : 'default';
    mermaid.initialize(mermaidConfig);
    if (mermaidInput.value.trim()) {
        renderDiagram();
    }
}

// Watch for dark mode changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (!localStorage.getItem('theme')) {
        // Only apply system preference if user hasn't manually selected a theme
        setTheme(event.matches ? 'dark' : 'light');
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Enter to render
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        renderDiagram();
    }
    
    // Ctrl/Cmd + Delete to clear
    if ((e.ctrlKey || e.metaKey) && e.key === 'Delete') {
        e.preventDefault();
        clearBtn.click();
    }
});

// Add responsive behavior for mobile
window.addEventListener('resize', () => {
    // Adjust diagram container height for mobile devices
    if (window.innerWidth < 768) {
        const outputContainer = document.querySelector('#mermaidOutput').parentElement;
        outputContainer.style.minHeight = '300px';
    }
});