# Verteilte-Systeme-Gruppe-Pflanzen

Prüfungsfrage 1:
Unser Anwendungsszenario ist ein Blumenladen, den wir in 3 Collections unterteilt haben. Die Collections sind aufgeteilt in Pflanzen, Kunden und Blumentöpfe. 
Verkäufer haben durch die Collections Pflanzen und Blumentöpfe die Möglichkeit Kunden bei der Suche nach bestimmten Objekten weiterzuhelfen. Zudem gibt es eine  Collection, in der die Kunden erfasst sind, damit der Verkäufer bestmöglich Kundenaquise zu betreiben. Weiterhin kann man bei jeder Colletion Elemente löschen, suchen und speichern. 
Die Gesamtarchitektur, in der sich unsere Anwendung befindet, ist die Client-Server-Architektur. Der Client wird direkt von den Nutzern bedient, während der Server im Hintergrund dauerhaft die Daten zur Verfügungn stellt.


Prüfungsfrage 2:
Ein Problem ist die Verfügbarkeit. Daten können aufgrund einer Serverüberlastung nicht immer erreicht werden. Das Problem ist zu lösen, indem es mehrere Server gibt. 
Das andere Problem ist die Konsistenz. Durch gleichzeitige Nutzung mehrerer Mitarbeitenden kann es zu verschiedenen Datensätzen in der Anwendung kommen. Um das Problem zu lösen, kann eine Lese-Sperre angewendet werden. Dadurch kann immer nur eine Person die Daten bearbeiten. 


Prüfungsfrage 3:
Für die Produktivsetzung muss das System zuerst getestet werden. Solbald das System produktiv geschalten wurde, muss das System weiterhin gewartet werden. Bei ständiger Nutzung kann es zu Programmfehlern kommen und daher ist die Wartung des Systems wichtig. 
