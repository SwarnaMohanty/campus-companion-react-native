import { useEffect, useRef } from 'react';
import { Animated, Button, Image, StyleSheet, Text, View } from 'react-native';
import eventsData from '../data/events.json';
export default function EventDetailsScreen({ route, navigation }) {
const { id, title } = route.params || {};
const event = eventsData.find((e) => e.id === id) || { title: title ||
'Event', dateISO: '', description: '', imageUrl: 'https://picsum.photos/300' };
// animated header/title - fade in
const fade = useRef(new Animated.Value(0)).current;
useEffect(() => {
Animated.timing(fade, { toValue: 1, duration: 600, useNativeDriver:
true }).start();
}, []);
return (
<View style={styles.container}>
<Animated.Text style={[styles.title, { opacity: fade }]}>{event.title}</
Animated.Text>
<Image source={{ uri: event.imageUrl }} style={styles.image} />
<Text style={styles.date}>{new Date(event.dateISO).toLocaleString()}</
Text>
<Text style={styles.desc}>{event.description}</Text>
<View style={{ marginTop: 12 }}>
<Button title="Back" onPress={() => navigation.goBack()} />
</View>
<View style={{ marginTop: 8 }}>
<Text style={styles.params}>Route params: {JSON.stringify(route.params)}
</Text>
</View>
</View>
);
}
const styles = StyleSheet.create({container: { flex: 1, padding: 12, backgroundColor: '#FFF' },
title: { fontSize: 22, fontWeight: '900', marginBottom: 8 },
image: { width: '100%', height: 200, borderRadius: 12, marginBottom: 8 },
date: { fontSize: 12, color: '#444', marginBottom: 8 },desc: { fontSize: 16, lineHeight: 22 },params: { marginTop: 6, fontSize: 12, color: '#666' }});