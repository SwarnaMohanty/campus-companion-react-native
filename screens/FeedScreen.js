import { useCallback, useRef, useState } from 'react';
import {
    Alert,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View
} from 'react-native';
import LegacyClock from '../components/LegacyClock';
import QuickLinkItem from '../components/QuickLinkItem';
import linksData from '../data/links.json';
export default function FeedScreen() {
const listRef = useRef(null);
const { width } = useWindowDimensions();
const numColumns = width < 600 ? 1 : 2;
const [links] = useState(linksData);
const handleOpen = useCallback((item) => {
// dummy open: Alert
Alert.alert('Open Link', `${item.label}\n${item.url}`);
}, []);
return (
<View style={styles.container}>
<Image source={{ uri: 'https://picsum.photos/800/250' }}
style={styles.banner} />
<View style={styles.rowSpace}>
<Text style={styles.heading}>Quick Links</Text>
<TouchableOpacity onPress={() => listRef.current?.scrollToOffset({
offset: 0, animated: true })} style={styles.topBtn}>
<Text style={styles.topBtnText}>Scroll to Top</Text>
</TouchableOpacity>
</View>
<FlatList
ref={listRef}
data={links}
key={numColumns}
numColumns={numColumns}
keyExtractor={(i) => i.id}
renderItem={({ item }) => <QuickLinkItem item={item}
onPress={handleOpen} />}
contentContainerStyle={{ paddingBottom: 20 }}
/>
<View style={{ padding: 12 }}>
<LegacyClock />
</View>
</View>
);
}
const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: '#FFF', padding: 12 },
banner: { width: '100%', height: 160, borderRadius: 12, marginBottom: 12 },
heading: { fontSize: 20, fontWeight: '800' },
topBtn: { backgroundColor: '#7C3AED', padding: 8, borderRadius: 8 },
topBtnText: { color: '#fff', fontWeight: '700' },
rowSpace: { flexDirection: 'row', justifyContent: 'space-between',
alignItems: 'center', marginBottom: 8 }
});