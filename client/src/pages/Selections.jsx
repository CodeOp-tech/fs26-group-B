import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Selections() {
	return (
		<div className="cards-group">
			
				<div className="back-card"><Card /></div>
				<div className="main-card"><Card /></div>
                <div className="back-card"><Card /></div>
			
		</div>
	);
}
