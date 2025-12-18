import Toast from 'react-native-toast-message';
import { View, Text } from 'react-native';

export  const toastConfig = {
  error: ({ text1, text2 }) => (
    <View
      style={{
        padding: 16,
        borderRadius: 12,
        backgroundColor: '#dc2626', // red
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff' }}>
        {text1}
      </Text>

      {text2 ? (
        <Text style={{ fontSize: 15, color: '#fff', marginTop: 4 }}>
          {text2}
        </Text>
      ) : null}
    </View>
  ),
};
