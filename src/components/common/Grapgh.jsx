"use client"
// CommitHeatmap.js
import axios from 'axios';
import { useEffect, useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css'; // Optional: for default styles

const CommitHeatmap = ({ username }) => {
  const [commitData, setCommitData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommitData = async () => {
      try {
        // GitHub API to get commit data for the given user
        const response = await axios.get(
          `https://api.github.com/users/${username}/events`
        );
          console.log(response)
        const commits = response.data.filter((event) => event.type === 'PushEvent');
        
        const commitCounts = commits.reduce((acc, commit) => {
          const date = commit.created_at.split('T')[0]; // Get the date part only (YYYY-MM-DD)
          if (acc[date]) {
            acc[date]++;
          } else {
            acc[date] = 1;
          }
          return acc;
        }, {});

        // Convert commitCounts into an array format suitable for the heatmap
        const data = Object.keys(commitCounts).map((date) => ({
          date: new Date(date), // Ensure the date is a valid JavaScript Date object
          count: commitCounts[date],
        }));

        setCommitData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching commit data:', error);
        setLoading(false);
      }
    };

    fetchCommitData();
  }, [username]);

  if (loading) {
    return <div>Loading commit heatmap...</div>;
  }

  return (
    <div>
      <h3>GitHub Commit Heatmap for {username}</h3>
      <CalendarHeatmap
        startDate={new Date('2020-01-01')}
        endDate={new Date()}
        values={commitData.map((item) => ({
          date: item.date,
          count: item.count,
        }))}
        showMonthLabels={true}
        showWeekdayLabels={true}
        colorRange={['#ffffff', '#c6e48b', '#6dbd35', '#1e6823', '#004b1d']}
        tooltipDataAttrs={(value) => {
          const date = value.date;
          // Check if the date is valid before calling toLocaleDateString
          if (date instanceof Date && !isNaN(date)) {
            return {
              'data-tip': `${date.toLocaleDateString()}: ${value.count} commits`,
            };
          }
          return {}; // Return an empty object if the date is invalid
        }}
      />
    </div>
  );
};

export default CommitHeatmap;