import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function EventItem({ item, onPress }) {
return (
<TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
<Image source={{ uri: item.imageUrl }} style={styles.image} />

<View style={styles.meta}>
<Text style={styles.title}>{item.title}</Text>
<Text style={styles.date}>{new Date(item.dateISO).toLocaleDateString()}
</Text>
</View>
</TouchableOpacity>
);
}
const styles = StyleSheet.create({
card: { flexDirection: 'row', padding: 10, margin: 8, borderRadius: 12,
backgroundColor: '#CCE7FF', alignItems: 'center' },
image: { width: 64, height: 64, borderRadius: 8, marginRight: 12 },
meta: { flex: 1 },
title: { fontSize: 16, fontWeight: '700' },
date: { fontSize: 12, color: '#333' }
});