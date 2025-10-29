import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
export default function ProfileScreen() {
const [email, setEmail] = useState('student@example.com');
const [phone, setPhone] = useState('');
const [errors, setErrors] = useState({});
const validate = () => {
const e = {};
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) e.email = 'Enter a valid email';
if (!/^\d{10,13}$/.test(phone)) e.phone = 'Phone must be 10-13 digits';
setErrors(e);
return Object.keys(e).length === 0;
};
const onSave = () => {
if (!validate()) return;
Alert.alert('Profile', 'Saved');
};
return (
<View style={styles.container}>
<Image source={{ uri: 'https://picsum.photos/200' }}
style={styles.avatar} />
<Text style={styles.name}>Student Name</Text>
<Text style={styles.label}>Email</Text>
<TextInput value={email} onChangeText={setEmail} style={styles.input}
keyboardType="email-address" />
{errors.email && <Text style={styles.error}>{errors.email}</Text>}
<Text style={styles.label}>Phone</Text>
<TextInput value={phone} onChangeText={setPhone} style={styles.input}
keyboardType="number-pad" />
{errors.phone && <Text style={styles.error}>{errors.phone}</Text>}
<View style={{ marginTop: 12 }}>
<Button title="Save" onPress={onSave} disabled={!email || !phone ||
Object.keys(errors).length > 0} />
</View>
</View>
);
}
const styles = StyleSheet.create({
container: { flex: 1, alignItems: 'center', padding: 16, backgroundColor:
'#FEF3C7' },
avatar: { width: 120, height: 120, borderRadius: 60, marginVertical: 12 },
name: { fontSize: 20, fontWeight: '800' },
label: { alignSelf: 'flex-start', marginTop: 12, fontWeight: '700' },
input: { width: '100%', padding: 10, borderRadius: 8, backgroundColor:
'#fff', marginTop: 6 },
error: { alignSelf: 'flex-start', color: '#B91C1C', marginTop: 6 }
})