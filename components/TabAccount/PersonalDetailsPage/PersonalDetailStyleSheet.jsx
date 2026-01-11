import { StyleSheet } from "react-native";

const PRIMARY_COLOR = '#FF5722'; // Modern Orange
const SECONDARY_COLOR = '#fff';
const INPUT_BG = '#f4f3f3';
const TEXT_DARK = '#333';
const TEXT_LIGHT = '#666';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: TEXT_DARK,
  },
  backButton: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: INPUT_BG,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  imageWrapper: {
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: INPUT_BG,
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: PRIMARY_COLOR,
    padding: 8,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  imageHint: {
    marginTop: 10,
    fontSize: 12,
    color: TEXT_LIGHT,
  },
  formCard: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: TEXT_DARK,
    marginBottom: 8,
    marginTop: 15,
    marginLeft: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: INPUT_BG,
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 55,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: TEXT_DARK,
    fontSize: 16,
  },
  switchSection: {
    marginTop: 25,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  switchLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchText: {
    fontSize: 16,
    color: TEXT_DARK,
    marginLeft: 12,
    fontWeight: '500',
  },
  updateButton: {
    backgroundColor: PRIMARY_COLOR,
    marginHorizontal: 20,
    marginTop: 30,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: PRIMARY_COLOR,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  updateButtonText: {
    color: SECONDARY_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
  },
});