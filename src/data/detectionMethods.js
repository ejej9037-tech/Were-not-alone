const detectionMethods = [
    {
        name: 'Optical Detection',
        description: 'Uses light and optics to detect objects or phenomena.',
        limitations: 'Sensitive to lighting conditions and may not work effectively in low light or bright light situations.'
    },
    {
        name: 'Infrared Detection',
        description: 'Detects infrared radiation from objects, commonly used in environmental monitoring.',
        limitations: 'Limited range and can be affected by atmospheric conditions like fog or rain.'
    },
    {
        name: 'Acoustic Detection',
        description: 'Uses sound waves to detect objects, suitable for underwater or concealed environments.',
        limitations: 'Can be interfered with by background noise, and effectiveness decreases with distance.'
    },
    {
        name: 'Chemical Detection',
        description: 'Utilizes chemical sensors to identify specific substances in the environment.',
        limitations: 'May have cross-sensitivity to other chemicals and can be limited by detection threshold.'
    },
    {
        name: 'Radar Detection',
        description: 'Employs radio waves to detect and locate objects, useful in navigation and tracking.',
        limitations: 'Can struggle with detecting small objects or those with low radar cross-section.'
    }
];

module.exports = detectionMethods;