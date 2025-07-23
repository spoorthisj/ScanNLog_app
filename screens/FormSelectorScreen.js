import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function FormSelectorScreen({ navigation }) {
  const [visibleInfo, setVisibleInfo] = useState(null);

  const toggleInfo = (formName) => {
    setVisibleInfo(visibleInfo === formName ? null : formName);
  };

  const Tooltip = ({ title, body, quote }) => (
    <View style={styles.tooltipWrapper}>
      <View style={styles.tooltipArrowUp} />
      <View style={styles.tooltipBox}>
        <Text style={styles.tooltipTitle}>{title}</Text>
        <Text style={styles.tooltipBody}>{body}</Text>
        <Text style={styles.tooltipQuote}>{quote}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose a Form Type</Text>

      <View style={styles.card}>
        {/* Form 1 */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Form1Setup')}
          >
            <Text style={styles.buttonText}>Form 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleInfo('form1')}>
            <Text style={styles.infoIcon}>ⓘ</Text>
          </TouchableOpacity>
        </View>
        {visibleInfo === 'form1' && (
          <Tooltip
            title="Part Number Accountability"
            body="Identifies the part being inspected and its associated assemblies or subassemblies."
            quote='✅ “What part are we inspecting?”'
          />
        )}

        {/* Form 2 */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Form2Setup')}
          >
            <Text style={styles.buttonText}>Form 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleInfo('form2')}>
            <Text style={styles.infoIcon}>ⓘ</Text>
          </TouchableOpacity>
        </View>
        {visibleInfo === 'form2' && (
          <Tooltip
            title="Product Accountability"
            body="Lists materials, special processes, and specifications used in manufacturing the part."
            quote='🧾 “What materials/processes were used?”'
          />
        )}

        {/* Form 3 */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Form3Setup')}
          >
            <Text style={styles.buttonText}>Form 3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleInfo('form3')}>
            <Text style={styles.infoIcon}>ⓘ</Text>
          </TouchableOpacity>
        </View>
        {visibleInfo === 'form3' && (
          <Tooltip
            title="Characteristic Accountability"
            body="Documents actual measured values for each design characteristic on the drawing."
            quote='📐 “Does the part meet all drawing specs?”'
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1c1c1e',
    textAlign: 'center',
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 24,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#1c3a63',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoIcon: {
    fontSize: 20,
    color: '#1c3a63',
  },

  // Tooltip Styles
  tooltipWrapper: {
    alignSelf: 'flex-start',
    marginBottom: 16,
    marginTop: 4,
    marginLeft: 8,
    position: 'relative',
    maxWidth: '100%',
  },
  tooltipArrowUp: {
    position: 'absolute',
    bottom: '100%',
    left: 20,
    width: 0,
    height: 0,
    borderBottomWidth: 10,
    borderBottomColor: '#ffd43b',
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    borderRightWidth: 10,
    borderRightColor: 'transparent',
  },
  tooltipBox: {
    backgroundColor: '#fffbe6',
    borderColor: '#ffd43b',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  tooltipTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#1c1c1e',
  },
  tooltipBody: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
    marginBottom: 6,
  },
  tooltipQuote: {
    fontStyle: 'italic',
    fontSize: 13.5,
    color: '#555',
    borderLeftWidth: 3,
    borderLeftColor: '#ffd43b',
    paddingLeft: 10,
  },
});






