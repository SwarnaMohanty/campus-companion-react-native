import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
export default function SettingsScreen() {
const [notif, setNotif] = useState(true);
const [compact, setCompact] = useState(false);
return (
<View style={styles.container}>
<Text style={styles.heading}>Preferences</Text>
<View style={styles.row}>
<Text style={styles.label}>Notifications</Text>
<Switch value={notif} onValueChange={setNotif} />
</View>
<View style={styles.row}>
<Text style={styles.label}>Compact Layout</Text>
<Switch value={compact} onValueChange={setCompact} />
</View>
<View style={{ marginTop: 12 }}>
<Text style={{ color: '#555' }}>More settings coming soon...</Text>
</View>
</View>
);
}
const styles = StyleSheet.create({
container: { flex: 1, padding: 12, backgroundColor: '#ECFEFF' },
heading: { fontSize: 18, fontWeight: '800', marginBottom: 12 },
row: { flexDirection: 'row', justifyContent: 'space-between', alignItems:
'center', paddingVertical: 12 }
});