
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const players = [
  {
    name: '재우',
    에임: 40,
    '게임 센스': 15,
    '전략적 사고': 5,
    커뮤니케이션: 26,
    '움직임 컨트롤': 9,
    '유틸리티 사용': 2,
    '심리적 요소': 24,
    팀워크: 15
  },
  {
    name: '가영',
    에임: 20,
    '게임 센스': 20,
    '전략적 사고': 19,
    커뮤니케이션: 22,
    '움직임 컨트롤': 9,
    '유틸리티 사용': 12,
    '심리적 요소': 19,
    팀워크: 21
  },
  {
    name: '만석',
    에임: 25,
    '게임 센스': 26,
    '전략적 사고': 18,
    커뮤니케이션: 23,
    '움직임 컨트롤': 13,
    '유틸리티 사용': 10,
    '심리적 요소': 15,
    팀워크: 22
  },
  {
    name: '재현',
    에임: 31,
    '게임 센스': 24,
    '전략적 사고': 22,
    커뮤니케이션: 20,
    '움직임 컨트롤': 21,
    '유틸리티 사용': 15,
    '심리적 요소': 14,
    팀워크: 19
  },
  {
    name: '경현',
    에임: 24,
    '게임 센스': 27,
    '전략적 사고': 22,
    커뮤니케이션: 22,
    '움직임 컨트롤': 18,
    '유틸리티 사용': 15,
    '심리적 요소': 18,
    팀워크: 20
  },
  {
    name: '현수',
    에임: 32,
    '게임 센스': 27,
    '전략적 사고': 18,
    커뮤니케이션: 20,
    '움직임 컨트롤': 27,
    '유틸리티 사용': 15,
    '심리적 요소': 19,
    팀워크: 16
  },
  {
    name: '채민',
    에임: 20,
    '게임 센스': 10,
    '전략적 사고': 8,
    커뮤니케이션: 15,
    '움직임 컨트롤': 8,
    '유틸리티 사용': 5,
    '심리적 요소': 20,
    팀워크: 17
  },
  {
    name: '선혜',
    에임: 24,
    '게임 센스': 14,
    '전략적 사고': 12,
    커뮤니케이션: 20,
    '움직임 컨트롤': 5,
    '유틸리티 사용': 7,
    '심리적 요소': 11,
    팀워크: 23
  }
];

const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF6384', '#36A2EB'];

const ImprovedPlayerSkillsRadarCharts = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: '#f0f0f0', padding: '20px' }}>
    {players.map((player, index) => (
      <div key={player.name} style={{ width: '45%', height: 400, margin: '10px', backgroundColor: 'white', borderRadius: '10px', padding: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h3 style={{ textAlign: 'center', fontSize: '1.2em', color: colors[index] }}>{player.name}</h3>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={Object.entries(player).filter(([key]) => key !== 'name').map(([key, value]) => ({ subject: key, A: value, fullMark: 40 }))}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#333', fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 40]} tick={{ fontSize: 10 }} />
            <Radar name={player.name} dataKey="A" stroke={colors[index]} fill={colors[index]} fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    ))}
  </div>
);

export default ImprovedPlayerSkillsRadarCharts;
