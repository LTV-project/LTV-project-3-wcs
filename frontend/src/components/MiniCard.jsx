function MiniCard({ lobby }) {
  return (
    <>
      <div className="creator-infos">
        <img
          src="https://placekitten.com/g/50/50"
          alt="creator-avatar"
          className="creator-avatar"
        />
        <p className="creator-pseudo">Hôte : {lobby.pseudo}</p>
      </div>
      <div className="game-infos">
        <p className="mini-card-body">Jeu : {lobby.game}</p>
        <p className="mini-card-body">
          Nombre de joueurs : {lobby.number_of_gamers}
        </p>
      </div>
      <p className="mini-card-body">Participants : {lobby.participants}</p>
      <p className="mini-card-body">Description : {lobby.description}</p>
    </>
  );
}

export default MiniCard;
