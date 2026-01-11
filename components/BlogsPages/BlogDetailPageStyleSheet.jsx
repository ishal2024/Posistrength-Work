import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "#fff"
  },
  heroContainer: {
    width: width,
    height: 350,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryBadge: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    backgroundColor: '#FF5722',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
  },
  categoryText: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  contentWrapper: {
    paddingTop: 25,
    paddingHorizontal: 20,
  },
  headerInfo: {
    marginBottom: 20,
  },
  mainHeading: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1A1A1A',
    lineHeight: 34,
    marginBottom: 15,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  authorSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFCCBC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#FF5722',
    fontWeight: 'bold',
    fontSize: 14,
  },
  authorName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  dateSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 13,
    color: '#777',
    marginLeft: 5,
    fontWeight: '500',
  },
  subHeadingContainer: {
    backgroundColor: '#F8F9FA',
    padding: 15,
    borderRadius: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#FF5722',
  },
  subHeadingText: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#555',
    lineHeight: 22,
  },
  articleBody: {
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 17,
    lineHeight: 28,
    color: '#333',
    textAlign: 'left',
  },
  footerActions: {
    marginTop: 40,
    marginBottom: 50,
    paddingTop: 30,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    alignItems: 'center',
  },
  shareTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 15,
  },
  actionButtons: {
    flexDirection: 'row',
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF5722',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  actionBtnText: {
    color: '#FF5722',
    fontWeight: '700',
    marginLeft: 8,
  },
});