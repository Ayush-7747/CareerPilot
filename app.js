// Career data from the provided JSON
const careerData = {
    careers: [
        {
            name: "Data Scientist",
            description: "Analyze complex data to help organizations make informed decisions",
            required_skills: ["Python", "Statistics", "Data Analysis", "Problem Solving"],
            growth_rate: "22%",
            median_salary: "$126,000",
            interests: ["Technology & IT", "Research & Development"],
            academic_focus: ["math", "science"]
        },
        {
            name: "Software Engineer",
            description: "Design and develop software applications and systems",
            required_skills: ["Python", "Java", "Web Development", "Problem Solving"],
            growth_rate: "25%",
            median_salary: "$110,000",
            interests: ["Technology & IT"],
            academic_focus: ["math", "science"]
        },
        {
            name: "Business Analyst",
            description: "Bridge the gap between IT and business using analytics",
            required_skills: ["Data Analysis", "Written Communication", "Problem Solving", "Critical Thinking"],
            growth_rate: "14%",
            median_salary: "$87,000",
            interests: ["Business & Finance", "Technology & IT"],
            academic_focus: ["math", "english"]
        },
        {
            name: "UX Designer",
            description: "Design user-friendly interfaces and experiences",
            required_skills: ["Design", "Critical Thinking", "Problem Solving", "Written Communication"],
            growth_rate: "13%",
            median_salary: "$85,000",
            interests: ["Technology & IT", "Arts & Media"],
            academic_focus: ["english"]
        },
        {
            name: "Marketing Manager",
            description: "Develop and execute marketing strategies",
            required_skills: ["Written Communication", "Leadership", "Content Writing", "Critical Thinking"],
            growth_rate: "10%",
            median_salary: "$75,000",
            interests: ["Business & Finance", "Arts & Media"],
            academic_focus: ["english", "social"]
        },
        {
            name: "Teacher",
            description: "Educate and inspire students in academic subjects",
            required_skills: ["Written Communication", "Leadership", "Public Speaking", "Critical Thinking"],
            growth_rate: "8%",
            median_salary: "$65,000",
            interests: ["Education"],
            academic_focus: ["english", "social"]
        },
        {
            name: "Financial Analyst",
            description: "Analyze financial data to guide investment decisions",
            required_skills: ["Statistics", "Data Analysis", "Critical Thinking", "Problem Solving"],
            growth_rate: "6%",
            median_salary: "$85,000",
            interests: ["Business & Finance"],
            academic_focus: ["math"]
        },
        {
            name: "Graphic Designer",
            description: "Create visual concepts to communicate ideas",
            required_skills: ["Design", "Art", "Critical Thinking", "Written Communication"],
            growth_rate: "3%",
            median_salary: "$55,000",
            interests: ["Arts & Media"],
            academic_focus: ["english"]
        },
        {
            name: "Mechanical Engineer",
            description: "Design and develop mechanical systems",
            required_skills: ["Problem Solving", "Critical Thinking", "Design", "Statistics"],
            growth_rate: "4%",
            median_salary: "$95,000",
            interests: ["Engineering"],
            academic_focus: ["math", "science"]
        },
        {
            name: "Nurse",
            description: "Provide patient care and support in healthcare settings",
            required_skills: ["Written Communication", "Critical Thinking", "Teamwork", "Problem Solving"],
            growth_rate: "7%",
            median_salary: "$80,000",
            interests: ["Healthcare", "Social Services"],
            academic_focus: ["science", "english"]
        },
        {
            name: "Content Writer",
            description: "Create engaging written content for various media",
            required_skills: ["Written Communication", "Content Writing", "Research", "Critical Thinking"],
            growth_rate: "12%",
            median_salary: "$60,000",
            interests: ["Arts & Media"],
            academic_focus: ["english"]
        },
        {
            name: "Cybersecurity Specialist",
            description: "Protect organizations from digital threats",
            required_skills: ["Problem Solving", "Critical Thinking", "Database Management", "Research"],
            growth_rate: "35%",
            median_salary: "$120,000",
            interests: ["Technology & IT"],
            academic_focus: ["math", "science"]
        },
        {
            name: "Social Worker",
            description: "Help individuals and communities solve problems",
            required_skills: ["Written Communication", "Critical Thinking", "Teamwork", "Leadership"],
            growth_rate: "12%",
            median_salary: "$55,000",
            interests: ["Social Services"],
            academic_focus: ["social", "english"]
        },
        {
            name: "Research Scientist",
            description: "Conduct research to advance knowledge in specific fields",
            required_skills: ["Research", "Critical Thinking", "Statistics", "Problem Solving"],
            growth_rate: "8%",
            median_salary: "$90,000",
            interests: ["Research & Development"],
            academic_focus: ["science", "math"]
        },
        {
            name: "Project Manager",
            description: "Plan and execute projects across various industries",
            required_skills: ["Leadership", "Written Communication", "Problem Solving", "Critical Thinking"],
            growth_rate: "11%",
            median_salary: "$95,000",
            interests: ["Business & Finance"],
            academic_focus: ["english", "math"]
        }
    ]
};

// Application state
let currentStep = 1;
let formData = {};

// DOM elements
const welcomeSection = document.getElementById('welcome');
const assessmentSection = document.getElementById('assessment');
const loadingSection = document.getElementById('loading');
const resultsSection = document.getElementById('results');
const getStartedBtn = document.getElementById('getStartedBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const restartBtn = document.getElementById('restartBtn');
const modifyBtn = document.getElementById('modifyBtn');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const careerForm = document.getElementById('careerForm');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeSliders();
    attachEventListeners();
    updateProgress();
});

// Event listeners
function attachEventListeners() {
    getStartedBtn.addEventListener('click', startAssessment);
    prevBtn.addEventListener('click', previousStep);
    nextBtn.addEventListener('click', nextStep);
    submitBtn.addEventListener('click', handleSubmit);
    restartBtn.addEventListener('click', restartAssessment);
    modifyBtn.addEventListener('click', modifyResponses);
    careerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleSubmit();
    });
}

// Initialize sliders with real-time value updates
function initializeSliders() {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        const valueDisplay = document.getElementById(slider.id + 'Value');
        slider.addEventListener('input', function() {
            valueDisplay.textContent = this.value;
        });
    });
}

// Start assessment
function startAssessment() {
    welcomeSection.classList.add('hidden');
    assessmentSection.classList.remove('hidden');
    currentStep = 1;
    updateStepDisplay();
}

// Navigation functions
function nextStep() {
    if (validateCurrentStep()) {
        if (currentStep < 4) {
            currentStep++;
            updateStepDisplay();
            updateProgress();
        }
    }
}

function previousStep() {
    if (currentStep > 1) {
        currentStep--;
        updateStepDisplay();
        updateProgress();
    }
}

function updateStepDisplay() {
    // Hide all steps
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });
    
    // Show current step
    document.getElementById(`step${currentStep}`).classList.add('active');
    
    // Update navigation buttons
    prevBtn.style.display = currentStep === 1 ? 'none' : 'inline-flex';
    nextBtn.style.display = currentStep === 4 ? 'none' : 'inline-flex';
    submitBtn.style.display = currentStep === 4 ? 'inline-flex' : 'none';
}

function updateProgress() {
    const progress = (currentStep / 4) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Step ${currentStep} of 4`;
}

// Form validation
function validateCurrentStep() {
    switch (currentStep) {
        case 1:
            return validatePersonalInfo();
        case 2:
            return true; // Sliders always have valid values
        case 3:
            return validateSkills();
        case 4:
            return validateInterests();
        default:
            return true;
    }
}

function validatePersonalInfo() {
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value;
    const education = document.getElementById('education').value;
    
    if (!name || !age || !education) {
        alert('Please fill in all required fields.');
        return false;
    }
    
    if (age < 15 || age > 65) {
        alert('Please enter a valid age between 15 and 65.');
        return false;
    }
    
    return true;
}

function validateSkills() {
    const selectedSkills = document.querySelectorAll('input[name="skills"]:checked');
    if (selectedSkills.length === 0) {
        alert('Please select at least one skill.');
        return false;
    }
    return true;
}

function validateInterests() {
    const selectedInterests = document.querySelectorAll('input[name="interests"]:checked');
    if (selectedInterests.length === 0) {
        alert('Please select at least one area of interest.');
        return false;
    }
    return true;
}

// Collect form data
function collectFormData() {
    // Personal information
    formData.name = document.getElementById('name').value.trim();
    formData.age = parseInt(document.getElementById('age').value);
    formData.education = document.getElementById('education').value;
    
    // Academic performance
    formData.grades = {
        math: parseInt(document.getElementById('math').value),
        science: parseInt(document.getElementById('science').value),
        english: parseInt(document.getElementById('english').value),
        social: parseInt(document.getElementById('social').value)
    };
    
    // Skills
    formData.skills = Array.from(document.querySelectorAll('input[name="skills"]:checked'))
        .map(checkbox => checkbox.value);
    
    // Interests
    formData.interests = Array.from(document.querySelectorAll('input[name="interests"]:checked'))
        .map(checkbox => checkbox.value);
}

// Handle form submission
function handleSubmit() {
    if (validateCurrentStep()) {
        collectFormData();
        showLoading();
        setTimeout(() => {
            const recommendations = generateRecommendations();
            showResults(recommendations);
        }, 4000);
    }
}

// Show loading animation
function showLoading() {
    assessmentSection.classList.add('hidden');
    loadingSection.classList.remove('hidden');
    
    // Animate loading steps
    const steps = document.querySelectorAll('.loading-step');
    steps.forEach((step, index) => {
        setTimeout(() => {
            step.classList.add('active');
            if (index > 0) {
                steps[index - 1].classList.remove('active');
                steps[index - 1].classList.add('completed');
            }
        }, (index + 1) * 1000);
    });
}

// Generate career recommendations
function generateRecommendations() {
    const scores = careerData.careers.map(career => ({
        career: career,
        score: calculateCareerScore(career, formData)
    }));
    
    // Sort by score and return top 3
    return scores
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
        .map((item, index) => ({
            ...item.career,
            matchPercentage: Math.round(item.score),
            rank: index + 1
        }));
}

// Calculate career match score
function calculateCareerScore(career, userData) {
    let score = 0;
    let maxScore = 0;
    
    // Academic performance scoring (30% weight)
    const academicWeight = 0.3;
    let academicScore = 0;
    let academicCount = 0;
    
    career.academic_focus.forEach(subject => {
        if (userData.grades[subject]) {
            academicScore += userData.grades[subject];
            academicCount++;
        }
    });
    
    if (academicCount > 0) {
        score += (academicScore / academicCount) * academicWeight;
    }
    maxScore += 100 * academicWeight;
    
    // Skills matching (40% weight)
    const skillsWeight = 0.4;
    const matchingSkills = career.required_skills.filter(skill => 
        userData.skills.includes(skill)
    ).length;
    const skillsScore = (matchingSkills / career.required_skills.length) * 100;
    score += skillsScore * skillsWeight;
    maxScore += 100 * skillsWeight;
    
    // Interest matching (30% weight)
    const interestsWeight = 0.3;
    const matchingInterests = career.interests.filter(interest => 
        userData.interests.includes(interest)
    ).length;
    const interestsScore = matchingInterests > 0 ? (matchingInterests / career.interests.length) * 100 : 0;
    score += interestsScore * interestsWeight;
    maxScore += 100 * interestsWeight;
    
    return Math.min((score / maxScore) * 100, 100);
}

// Show results
function showResults(recommendations) {
    loadingSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    
    displayRecommendations(recommendations);
    displaySkillsGap(recommendations);
    displayNextSteps(recommendations);
}

// Display career recommendations
function displayRecommendations(recommendations) {
    const grid = document.getElementById('recommendationsGrid');
    grid.innerHTML = '';
    
    recommendations.forEach(career => {
        const card = createRecommendationCard(career);
        grid.appendChild(card);
    });
}

// Create recommendation card
function createRecommendationCard(career) {
    const card = document.createElement('div');
    card.className = 'recommendation-card';
    
    const matchedSkills = career.required_skills.filter(skill => 
        formData.skills.includes(skill)
    );
    
    card.innerHTML = `
        <div class="recommendation-header">
            <div class="recommendation-rank">#${career.rank} Match</div>
            <div class="recommendation-title">${career.name}</div>
            <div class="recommendation-match">${career.matchPercentage}% Match</div>
        </div>
        <div class="recommendation-body">
            <p class="recommendation-description">${career.description}</p>
            <div class="recommendation-stats">
                <div class="stat-item">
                    <span class="stat-value">${career.growth_rate}</span>
                    <span class="stat-label">Growth Rate</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${career.median_salary}</span>
                    <span class="stat-label">Median Salary</span>
                </div>
            </div>
            <div class="required-skills">
                <h5>Required Skills</h5>
                <div class="skills-tags">
                    ${career.required_skills.map(skill => 
                        `<span class="skill-tag ${matchedSkills.includes(skill) ? 'matched' : ''}">${skill}</span>`
                    ).join('')}
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Display skills gap analysis
function displaySkillsGap(recommendations) {
    const container = document.getElementById('skillsGapContent');
    const allRequiredSkills = [...new Set(recommendations.flatMap(career => career.required_skills))];
    const missingSkills = allRequiredSkills.filter(skill => !formData.skills.includes(skill));
    
    if (missingSkills.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--color-success);">Great! You have all the key skills needed for your recommended careers.</p>';
        return;
    }
    
    // Group missing skills by category
    const skillCategories = {
        'Technical': ['Python', 'Java', 'Web Development', 'Data Analysis', 'AI/ML', 'Database Management'],
        'Communication': ['Public Speaking', 'Written Communication', 'Leadership', 'Teamwork'],
        'Creative': ['Design', 'Content Writing', 'Photography', 'Music', 'Art'],
        'Analytical': ['Problem Solving', 'Research', 'Critical Thinking', 'Statistics']
    };
    
    const categorizedGaps = {};
    Object.keys(skillCategories).forEach(category => {
        const categoryMissing = missingSkills.filter(skill => skillCategories[category].includes(skill));
        if (categoryMissing.length > 0) {
            categorizedGaps[category] = categoryMissing;
        }
    });
    
    const gapCardsHtml = Object.keys(categorizedGaps).map(category => `
        <div class="skills-gap-card">
            <div class="gap-category">${category} Skills</div>
            <div class="gap-skills">
                ${categorizedGaps[category].map(skill => 
                    `<span class="gap-skill">${skill}</span>`
                ).join('')}
            </div>
        </div>
    `).join('');
    
    container.innerHTML = `<div class="skills-gap-cards">${gapCardsHtml}</div>`;
}

// Display next steps
function displayNextSteps(recommendations) {
    const container = document.getElementById('nextStepsGrid');
    
    const nextSteps = [
        {
            icon: '📚',
            title: 'Education & Training',
            description: 'Pursue relevant courses, certifications, or degree programs to build required skills.'
        },
        {
            icon: '💼',
            title: 'Build Experience',
            description: 'Seek internships, volunteer work, or entry-level positions in your target field.'
        },
        {
            icon: '🤝',
            title: 'Network',
            description: 'Connect with professionals in your field through LinkedIn, industry events, and mentorship.'
        },
        {
            icon: '📋',
            title: 'Create Portfolio',
            description: 'Develop a portfolio showcasing your skills and projects relevant to your career goals.'
        }
    ];
    
    container.innerHTML = nextSteps.map(step => `
        <div class="next-step-card">
            <div class="next-step-icon">${step.icon}</div>
            <div class="next-step-title">${step.title}</div>
            <div class="next-step-description">${step.description}</div>
        </div>
    `).join('');
}

// Restart assessment
function restartAssessment() {
    // Reset form
    careerForm.reset();
    
    // Reset sliders
    document.querySelectorAll('.slider').forEach(slider => {
        slider.value = 50;
        document.getElementById(slider.id + 'Value').textContent = '50';
    });
    
    // Reset application state
    currentStep = 1;
    formData = {};
    
    // Show welcome section
    resultsSection.classList.add('hidden');
    welcomeSection.classList.remove('hidden');
}

// Modify responses
function modifyResponses() {
    resultsSection.classList.add('hidden');
    assessmentSection.classList.remove('hidden');
    currentStep = 1;
    updateStepDisplay();
    updateProgress();
}