import React, { useEffect, useState } from "react";
import RepositoryCard from "./RepositoryCard";
import type { Repository } from "../types/Repository";
import "./RepositoryList.css";

const RepositoryList: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    const mockData: Repository[] = [
      {
        id: 1,
        name: "repofy",
        description: "Sistema de catálogo de repositórios",
        language: "TypeScript",
        dateAt: "2024-06-01T10:00:00Z",
        favorites: 42,
        owner: {
          name: "rodrigosouza",
          avatarUrl: "https://avatars.githubusercontent.com/u/1234567",
        },
      },
      {
        id: 2,
        name: "blog-engine",
        description: "Motor de blog com React e .NET",
        language: "C#",
        dateAt: "2024-05-15T09:00:00Z",
        favorites: 30,
        owner: {
          name: "alineferraz",
          avatarUrl: "https://avatars.githubusercontent.com/u/7654321",
        },
      },
    ];

    setRepositories(mockData);
  }, []);

  return (
    <div className="repositories-container">
       {repositories.map((repo) => (
        <RepositoryCard key={repo.id} repository={repo} />
      ))}
    </div>
  );
};

export default RepositoryList;
