import Model from 'flarum/Model';
import mixin from 'flarum/utils/mixin';
import computed from 'flarum/utils/computed';

export default class Notification extends mixin(Model, {
  contentType: Model.attribute('contentType'),
  subjectId: Model.attribute('subjectId'),
  content: Model.attribute('content'),
  time: Model.attribute('time', Model.date),

  isRead: Model.attribute('isRead'),
  unreadCount: Model.attribute('unreadCount'),
  additionalUnreadCount: computed('unreadCount', unreadCount => Math.max(0, unreadCount - 1)),

  user: Model.hasOne('user'),
  sender: Model.hasOne('sender'),
  subject: Model.hasOne('subject')
}) {}
