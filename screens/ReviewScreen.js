import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function ReviewScreen({ route, navigation }) {
    const { userName = 'Manager', userRole = 'Supervisor' } = route.params || {};
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>ScanNLog</Text>
        <Text style={styles.subtitle}>FAIR Forms Digital Management</Text>
      </View>

      {/* User Info Card */}
      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Ionicons name="person-circle" size={28} color="#444" />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.cardTitle}>Quality Inspector</Text>
            <Text style={styles.cardSubtitle}>Aerospace Manufacturing</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.statusBadge}>
          <Text style={styles.badgeText}>Pending</Text>
        </TouchableOpacity>
      </View>

      {/* Menu Cards */}
      <TouchableOpacity
        style={styles.menuCard}
        onPress={() => navigation.navigate('FormSelector')}
      >
        <Ionicons name="add-circle-outline" size={24} color="#1c3a63" />
        <View style={styles.menuTextContainer}>
          <Text style={styles.menuTitle}>New FAIR Form</Text>
          <Text style={styles.menuSubtitle}>Create Form 1, 2, or 3 with AI validation</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuCard}>
        <MaterialIcons name="folder-open" size={24} color="#1c3a63" />
        <View style={styles.menuTextContainer}>
          <Text style={styles.menuTitle}>FAIR Records</Text>
          <Text style={styles.menuSubtitle}>View submitted forms and approval status</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuCard}>
        <Ionicons name="time-outline" size={24} color="#1c3a63" />
        <View style={styles.menuTextContainer}>
          <Text style={styles.menuTitle}>Pending Approvals</Text>
          <Text style={styles.menuSubtitle}>Forms awaiting supervisor review</Text>
        </View>
      </TouchableOpacity>

      {/* Recent FAIR Forms */}
      <Text style={styles.sectionTitle}>Recent FAIR Forms</Text>
      <View style={styles.recentPlaceholder}>
        <Text style={{ color: '#999' }}>[List of recent forms]</Text>
      </View>

      {/* Sync FAB */}
      <TouchableOpacity style={styles.syncButton}>
        <Ionicons name="cloud-upload-outline" size={20} color="#fff" />
        <Text style={styles.syncText}>Sync Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: 'rgba(72,79,139,0.05)',
      flexGrow: 1,
      paddingBottom: 100,
    },
    header: {
      marginBottom: 20,
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#1c3a63',
    },
    subtitle: {
      fontSize: 14,
      color: '#607D8B',
    },
    card: {
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 6,
      elevation: 2,
    },
    cardRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#1c1c1e',
    },
    cardSubtitle: {
      fontSize: 12,
      color: '#888',
    },
    statusBadge: {
      backgroundColor: '#FFA726',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 8,
    },
    badgeText: {
      color: 'white',
      fontSize: 12,
      fontWeight: '600',
    },
    menuCard: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderRadius: 12,
      marginBottom: 14,
      shadowColor: '#000',
      shadowOpacity: 0.04,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 4,
      elevation: 1,
    },
    menuTextContainer: {
      marginLeft: 12,
      flex: 1,
    },
    menuTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#1c1c1e',
    },
    menuSubtitle: {
      fontSize: 12,
      color: '#666',
      marginTop: 2,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 8,
      color: '#1c1c1e',
    },
    recentPlaceholder: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 12,
      alignItems: 'center',
    },
    syncButton: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: '#1c3a63',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 30,
      elevation: 4,
    },
    syncText: {
      color: '#fff',
      marginLeft: 6,
      fontWeight: '600',
    },
  });
  
  

  