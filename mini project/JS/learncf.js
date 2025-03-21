document.addEventListener('DOMContentLoaded', () => {
    const functionCards = document.querySelectorAll('.function-card');
    const detailsContent = document.getElementById('details-content');

    const functionDetails = {
        cultural: {
            title: "Cultural Fests",
            description: "Cultural fests are vibrant celebrations of diversity and creativity. These events typically feature music performances, dance shows, art exhibitions, and food festivals. They provide an excellent opportunity for students to showcase their talents and learn about different cultures.",
            tips: [
                "Form a diverse organizing committee",
                "Plan a mix of activities to cater to various interests",
                "Encourage participation from different cultural groups",
                "Arrange for proper permissions and safety measures"
            ]
        },
        academic: {
            title: "Academic Seminars",
            description: "Academic seminars are educational events focused on specific topics or fields of study. They often feature guest speakers, panel discussions, and interactive workshops. These events help students expand their knowledge, network with professionals, and explore new areas of interest.",
            tips: [
                "Choose relevant and trending topics",
                "Invite experienced speakers and industry experts",
                "Incorporate interactive elements like Q&A sessions",
                "Provide certificates of participation"
            ]
        },
        sports: {
            title: "Sports Meets",
            description: "Sports meets are competitive events that showcase athletic talents across various disciplines. These events promote physical fitness, teamwork, and school spirit. They often include track and field events, team sports tournaments, and individual competitions.",
            tips: [
                "Ensure proper safety measures and medical support",
                "Organize events for different skill levels",
                "Create a fair and transparent scoring system",
                "Arrange for proper equipment and facilities"
            ]
        },
        graduation: {
            title: "Graduation Ceremonies",
            description: "Graduation ceremonies are formal events that commemorate students' academic achievements. These ceremonies typically include the conferring of degrees, speeches from distinguished guests, and the symbolic moving of the tassel. They mark an important milestone in students' lives and are attended by family and friends.",
            tips: [
                "Plan the event well in advance",
                "Arrange for proper academic regalia",
                "Prepare a detailed schedule of the ceremony",
                "Organize a rehearsal for smooth execution"
            ]
        }
    };

    functionCards.forEach(card => {
        card.addEventListener('click', () => {
            const functionType = card.getAttribute('data-type');
            const details = functionDetails[functionType];

            let content = `
                <h3>${details.title}</h3>
                <p>${details.description}</p>
                <h4>Planning Tips:</h4>
                <ul>
                    ${details.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            `;

            detailsContent.innerHTML = content;
            detailsContent.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

