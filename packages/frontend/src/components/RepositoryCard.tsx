import React from "react";
import iconStar from "../assets/star-solid.svg";
import type { Repository } from "../types/Repository";
import "./RepositoryCard.css";

interface RepositoryCardProps {
  repository: Repository;
}

const timeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diff < 60) return "há poucos segundos";
  if (diff < 3600) return `há ${Math.floor(diff / 60)} minutos`;
  if (diff < 86400) return `há ${Math.floor(diff / 3600)} horas`;
  return `há ${Math.floor(diff / 86400)} dias`;
};

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository }) => {
  return (
    <div className="repository-card">
      <div className="repository-card-header">
        <div className="repository-photo-container">
          <img
            className="user-photo"
            src={repository.owner.avatarUrl}
            width={24}
            alt={`Foto de ${repository.owner.name}`}
          />
        </div>
        <div className="repository-description-container">
          <h3>{repository.owner.name}</h3>
          <p>
            {repository.createdAt
              ? `Criado ${timeAgo(repository.createdAt)}`
              : `Atualizado ${timeAgo(repository.dateAt)}`}
          </p>
        </div>
      </div>

      <div className="repository-description">
        <p>
          <a
            href={`https://github.com/${repository.owner.name}/${repository.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {repository.owner.name}/{repository.name}
          </a>
        </p>
        <div className="item-container">
          <span>{repository.language}</span>
          <div className="repository-favorite-container">
            <img src={iconStar} alt="Estrela ícone" width={20} />
            <span>{repository.favorites}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryCard;
