import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import EventItem from '../components/EventItem';
import eventsData from '../data/events.json';
export default function EventsScreen({ navigation }) {
const [loading, setLoading] = useState(true);
const [events, setEvents] = useState([]);
useEffect(() => {
const t = setTimeout(() => {
setEvents(eventsData);
setLoading(false);
}, 900);
return () => clearTimeout(t);
}, []);
const openEvent = (item) => {
navigation.push('EventDetails', { id: item.id, title: item.title });
};
if (loading) return <View style={[styles.center,{flex:1}]}><ActivityIndicator
size="large" /></View>;
return (
<View style={styles.container}>
<FlatList
data={events}
keyExtractor={(i) => i.id}
renderItem={({ item }) => <EventItem item={item} onPress={openEvent} />}
/>
</View>
);
}
const styles = StyleSheet.create({
container: { flex: 1, padding: 8, backgroundColor: '#F5F3FF' },
center: { alignItems: 'center', justifyContent: 'center' }
});