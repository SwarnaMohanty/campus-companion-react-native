import { useRef, useState } from 'react';
import {
    Alert,
    Button, FlatList, Platform,
    StyleSheet,
    Text, TextInput,
    ToastAndroid,
    View
} from 'react-native';
export default function NotesScreen() {
const [title, setTitle] = useState('');
const [desc, setDesc] = useState('');
const [notes, setNotes] = useState([]);
const [errors, setErrors] = useState({});
const descRef = useRef(null);
const validate = () => {
const e = {};
if (title.trim().length < 3) e.title = 'Title must be at least 3 characters';
if (desc.trim().length < 10) e.desc = 'Description must be at least 10 characters';
setErrors(e);
return Object.keys(e).length === 0;
};
const onSave = () => {
if (!validate()) return;
const newNote = { id: String(Date.now()), title: title.trim(), desc:
desc.trim() };
setNotes((s) => [newNote, ...s]);
setTitle('');
setDesc('');
if (Platform.OS === 'android') {
ToastAndroid.show('Note saved', ToastAndroid.SHORT);
} else {
Alert.alert('Success', 'Note saved');
}
};
return (
<View style={styles.container}>
<Text style={styles.heading}>Add Note</Text>
<TextInput
placeholder="Title"
value={title}
onChangeText={setTitle}
returnKeyType="next"
onSubmitEditing={() => descRef.current?.focus()}
style={styles.input}
/>
{errors.title && <Text style={styles.error}>{errors.title}</Text>}
<TextInput
ref={descRef}
placeholder="Description"
value={desc}
onChangeText={setDesc}
multiline
style={[styles.input, { minHeight: 80 }]}
/>
{errors.desc && <Text style={styles.error}>{errors.desc}</Text>}
<View style={styles.btnRow}>
<Button title="Save" onPress={onSave} disabled={!title || !desc ||
Object.keys(errors).length > 0 && true} />
</View>
<Text style={[styles.heading, { marginTop: 16 }]}>Saved Notes</Text>
<FlatList
data={notes}
keyExtractor={(i) => i.id}
renderItem={({ item }) => (
<View style={styles.noteCard}>
<Text style={styles.noteTitle}>{item.title}</Text>
<Text style={styles.noteDesc}>{item.desc}</Text>
</View>
)}
ListEmptyComponent={<Text style={{ marginTop: 8 }}>No notes yet.</Text>}
/>
</View>
);
}
const styles = StyleSheet.create({
container: { flex: 1, padding: 12, backgroundColor: '#FFF7ED' },
heading: { fontSize: 18, fontWeight: '800', marginBottom: 8 },
input: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom:6, borderWidth: 1, borderColor: '#eee' },
btnRow: { marginVertical: 6 },
noteCard: { padding: 12, marginVertical: 6, borderRadius: 8, backgroundColor:
'#E6FFFA' },
noteTitle: { fontWeight: '700' },
noteDesc: { marginTop: 6 },
error: { color: '#B91C1C', marginBottom: 6 }
});