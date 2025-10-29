import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
function QuickLinkItem({ item, onPress }) {
return (
<TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
<Text style={styles.label}>{item.label}</Text>
</TouchableOpacity>
);
}
QuickLinkItem.propTypes = {
item: PropTypes.shape({ id: PropTypes.string, label: PropTypes.string, url:
PropTypes.string }),
onPress: PropTypes.func.isRequired
};
export default QuickLinkItem;
const styles = StyleSheet.create({
card: {
padding: 14,
margin: 8,
borderRadius: 12,
backgroundColor: '#FDE68A',
alignItems: 'center',
justifyContent: 'center'
},
label: { fontSize: 16, fontWeight: '600' }
});