export default function NotificationsCard() {


    
	return (
		<>
			<h1>Notifications</h1>

			<div className="pending">
				<h3>Pending Invitations</h3>
				{pendingInvites.length > 0 ? (
					pendingInvites.map((invite, i) => (
						<>
							<div key={i} className="invitation-card">
								<p>
									Pending invitation from{" "}
									<strong>{invite.inviter.username}</strong>{" "}
								</p>

								<button
									onClick={() => handleAcceptInvitation(invite.id)}
								>
									Accept
								</button>
							</div>
						</>
					))
				) : (
					<div className="no-invites">
						<h5>{msg}</h5>
						<button onClick={goHome}>Send an invite</button>
					</div>
				)}
			</div>
		</>
	);
}
